# Toucan Toco Embed with React

There is a simple demo of embed integration in React project.


## Manual

- Fist import the TCEmbed component inside your code(component/container/page).

- Second, set the `host` and your `id`.

Your integration should looks like this :
```jsx
const name = "My Special graph";
const host = "https://demo-embed.toucantoco.com";
const id = "ba817dc8-e1e6-4ee0-8ac8-b461d52e1b20";

return (
    <div className="App">
        {/* You import the component here ! */}
        <TCEmbed name={name} host={host} id={id}/>
    </div>
)
```

And you're all done !
