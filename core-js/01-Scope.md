# Scope

Scope means world in simple sense.

- Everything start with root scope which is called window (in terms of browser)
- Child have access to parent scope. But parent don't have access to child scope.
- If I forget to declare var inside any child scope then it will go one step up and try to find any declaration, if had any then okay, otherwise JS will create a declaration in window scope.

## Example

```js
// Window/parent context/scope
function myFunc()
{
    // local/child context/scope
    x = 10;
    console.log(`${x} from myFunc()`);
}

myFunc();

console.log(window.x);
```
