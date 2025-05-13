# What do we want to build?

We are building a shopping cart for an online grocery shop. The idea of this kata is to build the product in an iterative way.

### Technical requirements

- The price per unit is calculated based on the product cost and the percentage of revenue that the company wants for that product.
- The price has to be rounded up; so if a price per unit calculated is 1.7825, then the expected price per unit for that product is 1.79
- The final price of the product is then calculated as the **price per unit with the VAT rounded up**.
- Products are not allowed to have the same name.

### List of products

| **Name**       | **Cost** | **% Revenue** | **Price per unit** | **Tax**                 | **Final price** |
| -------------- | -------- | ------------- | ------------------ | ----------------------- | --------------- |
| **Iceberg 🥬** | _1.55 €_ | _15 %_        | 1,79 €             | _Normal (21%)_          | 2.17 €          |
| **Tomato 🍅**  | _0.52 €_ | _15 %_        | 0.60 €             | _Normal (21%)_          | 0.73 €          |
| **Chicken 🍗** | _1.34 €_ | _12 %_        | 1.51 €             | _Normal (21%)_          | 1.83 €          |
| **Bread 🍞**   | _0.71 €_ | _12 %_        | 0.80 €             | _First necessity (10%)_ | 0.89 €          |
| **Corn 🌽**    | _1.21 €_ | _12 %_        | 1.36 €             | _First necessity (10%)_ | 1.50 €          |

### List of discounts

| **Discounts code** | **Amount** |
| :----------------: | ---------- |
|    **PROMO_5**     | 5%         |
|    **PROMO_10**    | 10%        |

### Use cases

#### List the shopping cart

> ```
> As a customer
> I want to see my shopping cart
> ```

#### **Empty cart**

```
--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
|------------------------------------------|
| Promotion:                               |
--------------------------------------------
| Total products: 0                        |
| Total price: 0.00 €                      |
--------------------------------------------
```

#### Add product to shopping cart

> ```
> As a customer
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Tomato  🍅 to my shopping cart
> I want to add Chicken 🍗 to my shopping cart
> I want to add Bread 🍞 to my shopping cart
> I want to add Corn 🌽 to my shopping cart
> I want to see my shopping cart
> ```

```
--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
| Iceberg 🥬   | 2.17 €         | 1        |
| Tomato  🍅   | 0.73 €         | 1        |
| Chicken 🍗   | 1.83 €         | 1        |
| Bread 🍞     | 0.88 €         | 1        |
| Corn 🌽      | 1.50 €         | 1        |
|------------------------------------------|
| Promotion:                               |
--------------------------------------------
| Total products: 5                        |
| Total price: 7.11 €                      |
--------------------------------------------
```

#### Add product to shopping cart

> ```
> As a customer
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Tomato  🍅 to my shopping cart
> I want to add Chicken 🍗 to my shopping cart
> I want to add Bread 🍞 to my shopping cart
> I want to add Bread 🍞 to my shopping cart
> I want to add Corn 🌽 to my shopping cart
> I want to see my shopping cart
> ```

```
--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
| Iceberg 🥬   | 2.17 €         | 3        |
| Tomato  🍅   | 0.73 €         | 1        |
| Chicken 🍗   | 1.83 €         | 1        |
| Bread 🍞     | 0.88 €         | 2        |
| Corn 🌽      | 1.50 €         | 1        |
|------------------------------------------|
| Promotion:                               |
--------------------------------------------
| Total products: 8                        |
| Total price: 12.33 €                     |
--------------------------------------------
```

#### Apply discount to the shopping cart

> ```
> As a customer
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Iceberg 🥬 to my shopping cart
> I want to add Tomato  🍅 to my shopping cart
> I want to add Chicken 🍗 to my shopping cart
> I want to add Bread 🍞 to my shopping cart
> I want to add Bread 🍞 to my shopping cart
> I want to add Corn 🌽 to my shopping cart
> I want to apply my coupon code PROMO_5
> I want to see my shopping cart
> ```

```
--------------------------------------------
| Product name | Price with VAT | Quantity |
| -----------  | -------------- | -------- |
| Iceberg 🥬   | 2.17 €         | 3        |
| Tomato  🍅   | 0.73 €         | 1        |
| Chicken 🍗   | 1.83 €         | 1        |
| Bread 🍞     | 0.88 €         | 2        |
| Corn 🌽      | 1.50 €         | 1        |
|------------------------------------------|
| Promotion: 5% off with code PROMO_5      |
--------------------------------------------
| Total products: 8                        |
| Total price: 11.71 €                     |
--------------------------------------------
```

### Possible API for the ShoppingCart

**Approach 1 passing objects as arguments could be DTO**

```javascript
export interface ShoppingCart {
  addItem(cartItem: CartItem): void;
  applyDiscount(discount: Discount): void;
  printShoppingCart(): void;
  // TODO
  removeItem(name: string): void;
  updateItemQuantity(name: string, quantity: number): void;
  getItems(): ReadonlyArray<CartItem>;
}
```

### Summary of steps

**Inside-Out (classicist)** vs **Outside-In (London School / mockist)** has significant implications for how the system grows. Since I am aiming for **small, logical, test-driven steps**, I will start inside out.

##### Suggested Inside-Out Iterations (with TDD focus)

| Iteration | Focus                                    | Why Start Here?                                              |
| --------- | ---------------------------------------- | ------------------------------------------------------------ |
| 1         | `Product` - price per unit and VAT logic | Small, atomic, pure — perfect TDD start                      |
| 2         | `CartItem` - quantity & total price      | Introduces aggregation, still isolated logic                 |
| 3         | `Discount` - percentage logic            | Stateless, predictable, complements pricing                  |
| 4         | `ShoppingCart` - add items               | Start using composition of domain elements                   |
| 5         | `ShoppingCart` - apply discount          | Introduces first mutation to cart state                      |
| 6         | `ShoppingCart` - total price & print     | Drives end-to-end expectation-based testing                  |
| 7         | `ProductCatalogue` or Registry           | Encapsulate product lookup and validation                    |
| 8         | `ShoppingCart` - delete items            | TODO - Drive removing Items from the cart                    |
| 9         | `ShoppingCart` - updateItemQuantity      | TODO - Drive changing the quantity                           |
| 10        | `ShoppingCart` - getItems                | TODO - Drive getting the items to be more inline with a cart |

### Evolution Flow Summary

#### Phase 1: Pure Domain Logic

- `Product` — validate markup/VAT/rounding rules
- `CartItem` — quantity x price logic
- `Discount` — test discount % and edge cases (e.g. invalid codes)

#### Phase 2: Composition

- `ShoppingCart` — manages cart items and uses the above types
- Discounts applied as decorators or cart state

#### Phase 3: Orchestration + I/O-style Outputs

- Implement `ShoppingCart.getShoppingCart()` as DTO for rendering
- `print()` or `toString()` as test-driving format rendering
- Possibly inject or access product catalogue here

### When to Consider _Outside-In_

You could start Outside-In **only** if:

- You’re driving everything from the end goal (like rendering the full cart view)
- You're willing to mock deeper domain types (`Product`, `CartItem`, etc.)

But in this kata, that’s harder to justify because the logic in the "leaf" types is richer and more test-worthy than in the orchestration layer.

### Summary

Thanks Emmanuael Valverde, for your cool take on this [kata](https://www.codurance.com/katas/shopping-cart-kata). There were a few sneaky catches with the pricing. I have done this kata before using simple types and I found myself producing more code this time. I also did outside in, before, mocking and faking bits until I had the final design. I think breaking this up into the seperate phases made it easier to get my head around each concept, so I am glad I did it this way. The thing didn't like is it forced me into a solution by virtue of what I simplified. It may be a good or bad thing, no idea.
