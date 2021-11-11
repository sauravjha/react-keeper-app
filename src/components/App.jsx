import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../note";

function App() {                                    
    return <div>
        <Header />
        {notes.map(note => <Note title={note.title} content={note.content}/>)}
        <Footer />
    </div>
}

export default App;