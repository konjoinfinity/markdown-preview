marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    text: `# h1 heading

## h2 heading
<br><br>

### Bold heading h3

- List
- Items
- &lt;br&gt; line breaks

<br>

\`Code syntax?\`
\`\`\`javascript
let s = "JavaScript";
console.log(s);
\`\`\`
<br>

> “This is a quote.”
― Author 
<br>

Links! [links](https://www.freecodecamp.org)
<br>
**Strong**
__Bold__

![Markdown logo](https://img.icons8.com/office/512/markdown.png)`
    
  };
}

  handleChange(e){
    this.setState({text: e.target.value})   
  }
  
  render(){
  return (
  <div style={{display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
              flexDirection: 'row'}}>
      <div id="markdown-box" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', minWidth: 1000, minHeight: 350, borderRadius: 8, padding: 40, margin:20}}>
        <div style={{flexDriection: 'row', display: 'flex', justifyContent: 'space-evenly'}}>
      <h2 style={{color: '#444', padding: 10, fontWeight: 200}}>Markdown Editor</h2>
          
        <textarea id="editor" rows="4" cols="50" onChange={(e) => this.handleChange(e)} style={{width: 600}} value={this.state.text} placeholder="Enter Markdown..."></textarea>
        <h2 style={{color: '#444', padding: 10, fontWeight: 200}}>Preview</h2>
          
          <div id="preview" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', padding: 5, width: 600}} 
            dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}></div>
      </div>
      </div>
      </div> 
  )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
