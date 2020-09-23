import React, { Component } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
// import ReactDOM from 'react-dom'  
import { MdNavigateNext } from "react-icons/md";
import './css/BootstrapCarousel.css';
import Axios from 'axios';


export class BootstrapCarousel extends Component {  
    state = {
        products:[],
        isLoading:true,
    }


    componentDidMount() {
        // const node = ReactDOM.findDOMNode(this);
        Axios.get(`http://localhost:4001/products`)
        .then((res)=>{
            console.log(res.data)
            this.setState({products:res.data})
            this.setState({isLoading:false})
        }).catch((err)=>{
            console.log(err)
        })
    }

    loading=()=>{
        return (
            <div className="d-flex justify-content-center" >
              <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        )
    }
    
    renderData=()=>{
        return this.state.products.map((val)=>{
            return (
                <Carousel.Item className='' key={val.id} style={{height:"100%"}} >  
                    <img style={{height:"100vh", objectFit:'cover'}}  
                        className="d-block w-100"  
                        src={val.photos}
                        alt={`Illustrasi "${val.name}" trip`}/> 
                    <Carousel.Caption className=''>
                        <span className=''>{val.id} / {this.state.products.length} trip</span>  
                        <h3 className='' style={{fontSize:80, fontWeight:'bolder'}}>{val.nametrip}</h3>  
                        <div className='' style={{width:'50vw', fontWeight:'lighter'}}>
                            {val.desc}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }

    render() {        
        return (  
            <>  
                {
                    this.state.isLoading?
                    this.loading()
                    :
                    <Carousel>
                        {this.renderData()}  
                    </Carousel>  
                }  
                <div className='css-showmore d-flex justify-content-center align-items-center'>
                    <div className='css-showmore-btn'>
                        <h2 style={{color:'black'}}><MdNavigateNext/> </h2>
                    </div>
                    <div className='ml-2'>
                        <span  style={{color:"white"}}>Show more</span> 
                    </div>
                </div>  
            </>  
        )
    }    
}  

export default BootstrapCarousel  