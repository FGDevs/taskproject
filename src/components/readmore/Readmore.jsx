import React from 'react';
import './Readmore.css'


// const [indexReadmore, setindexReadmore] = useState(0)
// const [word, setWord] = useState('')

// const onReadmoreClick=(index)=>{
    
//     // setindexReadmore(index);
//     // setWord()

// }

function renderReadmore (kata='') {
    console.log(kata)
    return (
        kata
    )
}

export default function Readmore(kata='' ) {
    var perkata = kata.split(' ')
    var bataskata = 10
    var outputkata = ''
    if(perkata.length < bataskata){
        return kata
    }else{ 
        for (var i=0; i<bataskata; i++){
            outputkata += perkata[i]+' ' 
        }
        return (
            <div>
                {outputkata} . . 
                <br/>
                <span className='Hover' onClick={()=>renderReadmore(kata)} style={{color:"rgb(253, 132, 132)"}}> Read More </span>
            </div>
        ) 
    }     
}
