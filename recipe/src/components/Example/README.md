# Journey with Pedro so far

1. Created storybook and component together

2. Ran storybook and modified storybook to represent what was of interest and visually understood what was being done

3. Ran tests and got one for free based on the storybook scenarios see [global snapshots](./src/**snapshots**/storybook.test.js.snap) for last snapshot

   ```html
   exports[`Storyshots Page/Example Default 1`] = `
   <div>
     <p>You clicked 0 times</p>
     <button onClick="{[Function]}">Click me</button>
   </div>
   `;
   ```

4. Created behavioural test to drive core functionality of component

   ```javascript
    describe('Example', () => {
        test('should increment clicks when button fired', () => {
            render(<Example initial={0} />);
            expect(screen.queryByText('You clicked 0 times')).toBeInTheDocument();

            fireEvent.click(screen.getByText('Click me'));

            expect(screen.queryByText('You clicked 1 times')).toBeInTheDocument();
        });
   ```

5. **JOB DONE!!!!**
