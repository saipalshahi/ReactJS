{
  /* 
<div id="container">
<div id="container1">
    <h1>I am heading 1.</h1>
    <h2>I am heading 2.</h2>
</div>
<div id="container2">
    <h1>I am heading 1.</h1>
    <h2>I am heading 2.</h2>
</div>
</div>
*/
}

const containerDiv = React.createElement("div", { id: "container" }, [
    React.createElement("div",{id:"conatiner1"},[
        React.createElement("h1",{},"I am heading 1."),
        React.createElement("h2",{},"I am heading 2.")
    ]),React.createElement("div",{id:"conatiner1"},[
        React.createElement("h1",{},"I am heading 1."),
        React.createElement("h2",{},"I am heading 2.")
    ])
    
]);

console.log(containerDiv); // reactElement === object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(containerDiv);


// React can run on one specific part not only on full web page.