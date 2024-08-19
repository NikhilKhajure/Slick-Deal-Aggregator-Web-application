import React, { useEffect, useRef, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as qna from '@tensorflow-models/qna';

function Askquestion() {
    // const passageRef = useRef(null);
    // const QuestionRef = useRef(null);
    // const [answer, setAnswer] = useState();
    // const [model, setModel] = useState(null);

    // const loadModel = async () => {
    //     try {
    //         const modelUrl = 'https://cors-anywhere.herokuapp.com/https://www.kaggle.com/models/tensorflow/mobilebert/frameworks/tfJs/variations/mobilebert/versions/1/model.json?tfjs-format=file&tfhub-redirect=true';
    //         const loadedModel = await tf.loadGraphModel(modelUrl);
    //         setModel(loadedModel);
    //         console.log("Model Loaded");
    //     } catch (error) {
    //         console.error("Failed to load model:", error);
    //     }
    // };

    // useEffect(() => {
    //     loadModel();
    // }, []);

    // const answerQuestions = async (e) => {
    //     try {
    //         if (e.which === 13 && model !== null) {
    //             console.log("Questions Submitted");
    //             const passage = passageRef.current.value;
    //             const questions = QuestionRef.current.value;

    //             const answers = await model.findAnswers(questions, passage);
    //             setAnswer(answers);
    //             console.log(answers);
    //         }
    //     } catch (error) {
    //         console.error("Error answering questions:", error);
    //     }
    // };

    return (
        // <div className="questions">
        //     {model === null ? <h1>Model is Loading</h1> :
        //         <>
        //             <h1>Passage</h1>
        //             <textarea ref={passageRef} cols="100" rows="30"></textarea>
        //             <h1>Ask Questions</h1>
        //             <input type="text" ref={QuestionRef} size="80" onKeyDown={answerQuestions} />
        //             <h1>Answer</h1>
        //             {answer ? answer.map((ans, idx) => (
        //                 <div key={idx}>
        //                     <b>Answer {idx + 1}-</b><h3> {ans.text}({ans.score}) </h3>
        //                 </div>
        //             )) : "No Data"}
        //         </>
        //     }
        // </div>
        <div className="questions">
            <div id='info'></div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Ask Question About Product</label>
                <input type="text" className="form-control" />
                <button className='quickViewBtn' style={{ margin: ".7rem 0" }}>Ask</button>
            </div>
            <div className="answer">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure animi ipsam libero pariatur dolorem placeat quibusdam alias eum facilis amet!</p>
            </div>
        </div>
    );
}

export default Askquestion;
