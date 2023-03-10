import { marked } from 'marked'
import DOMPurify from 'dompurify';
import { useState } from 'react'

import './styles/App.css'
import Footer from './components/Footer';

const estadoInicial =
  "# Um React Markdown Visualizer!"
  + "\n" +
  "# Um H1"
  + "\n" +
  "## Um h2"
  + "\n" +
  "Um link [links](https://www.freecodecamp.org)"
  + "\n\n" +
  "Aqui uma linha de código: `<div></div>`"
  + "\n\n" +
  "Aqui um bloco de código:" +
  `
    // this is multi-line code:

    function anotherExample(firstLine, lastLine) {
      if (firstLine == '' && lastLine == '') {
        return multiLineCode;
      }
    }
  `
  + "\n" +
  `- Um lista.
    - sub nível de lista.
      - sub-sub nível de lista.
          - sub sub-sub nível de lista.
  `
  + "\n" +
  "> Block Quotes!"
  + "\n\n" +
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
  + "\n\n" +
  "Um texto em **negrito**"

//console.log(estadoInicial)

function App() {

  const [texto, setTexto] = useState(estadoInicial)
  //const html = marked.parse(texto, {gfm: true, breaks: true}) 
  const htmlclean = DOMPurify.sanitize(marked.parse(texto, { gfm: true, breaks: true }));

  //console.log('sujo', html)
  //console.log('limpo', htmlclean)

  return (
    <>
      <main className="App">
        <section className='editorContainer'>
          <label className='label' htmlFor='editor'>Editor</label>
          <textarea id="editor" value={texto} onChange={(evento) => setTexto(evento.target.value)}></textarea>
        </section>
        <div className='previewContainer'>
          <label className='label'>Preview</label>
          <div id='preview' dangerouslySetInnerHTML={{ __html: htmlclean }}>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
