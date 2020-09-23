import './admin.css'
import React, { Component, createRef } from 'react';

import { MdDashboard , MdDeleteForever } from "react-icons/md";
import { BiCalendar , BiListUl , BiSupport , BiMessageSquareEdit} from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import Logo from '../../assets/logo-icons-black.png'
import { API_URL , dateFormatter, priceFormatter } from "../../helpers/helper";
import { Readmore } from "../../components/Readmore";
import Axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Admin extends Component {
  state={
    Product: {},
    modal: false,
    modaledit:false,
    indexedit:-1,
    nametrip:createRef(),
    photo:createRef(),
    starttripdate:createRef(),
    endtripdate:createRef(),
    seat :'',
    price:'',
    regdate:createRef(),
    desc:createRef(),
    editnametrip:createRef(),
    editphoto:createRef(),
    editstarttripdate:createRef(),
    editendtripdate:createRef(),
    editseat :'',
    editprice:'',
    editregdate:createRef(),
    editdesc:createRef(),
  }

  componentDidMount() {
    Axios.get(`${API_URL}/products`)
    .then((res)=>{
      this.setState({Product:res.data})
      console.log(this.state.Product)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  renderProductTable() {
    return this.state.Product.map((val,index)=>{
      return (
        <div className='css-productlistbody' key={val.id}>      
          <div className='css-productlistcategory css-listno'>
            {index+1}
          </div>
          <div className='css-productlistcategory css-listnametrip'>
            {val.nametrip}
          </div>
          <div className='css-productlistcategory css-listphoto'>
            <img 
              src={val.photos}
              alt={val.nametrip+'Trip'}
              style={{height:100}}
              />
          </div>
          <div className='css-productlistcategory css-listtripdate  '>
            {dateFormatter(val.startdate)}    
          </div>
          <div className='css-productlistcategory css-listseat'>
            28
          </div>
          <div className='css-productlistcategory css-listprice'>
            {priceFormatter(val.price)}
          </div>
          <div className='css-productlistcategory css-listregdate'>
            {dateFormatter(val.enddate)}
          </div>
          <div className='css-productlistcategory css-listdesc' >
            {Readmore(val.desc)}
          </div> 
          <div className='css-productlistcategory css-listaction' >
              <MdDeleteForever className='css-listactiondelete' onClick={()=>this.onDeleteClick(index)}/>
              <BiMessageSquareEdit className='css-listactionedit' onClick={()=>this.onEditClick(index)}/>
          </div>     
        </div>
      )
    })
  }
  
  

  onAddDataClick=()=>{
    const {
      nametrip, 
      photo,
      starttripdate,
      endtripdate,
      regdate,
      desc,}=this.state;

    var inputnametrip=nametrip.current.value;
    var inputphoto=photo.current.value; 
    var inputstarttrip=starttripdate.current.value;
    var inputendtripdate=endtripdate.current.value;
    var inputregdate=regdate.current.value;
    var inputdesc=desc.current.value
    var obj = {
      nametrip:inputnametrip,
      photos:inputphoto,
      startdate:inputstarttrip,
      endtripdate:inputendtripdate,
      seat:this.state.seat,
      price:this.state.price,
      regdate:inputregdate,
      desc:inputdesc
    }
    console.log(obj)
    Axios.post(`${API_URL}/products`, obj)
    .then((res)=>{
      this.setState({Product:res.data})
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  onEditClick=(index)=>{
    this.setState({modaledit:!this.state.modaledit})
    this.setState({indexedit:index})
    console.log('a')
    console.log(this.state.Product)
    console.log(index)
  }

  onSeatChange=(e)=>{
    if(e.target.value===''){
      this.setState({seat:0})
    }
    console.log(this.state.seat)
    if(Number(e.target.value)){
      if(this.state.seat===0){
        this.setState({...this.state,seat:e.target.value[1]})
      }else{
        this.setState({...this.state, seat:e.target.value})
      }
    }
  }
  
  onPriceChange=(e)=>{
    if(e.target.value===''){
      this.setState({price:0})
    }
    console.log(this.state.price)
    if(Number(e.target.value)){
      if(this.state.price===0){
        this.setState({price:e.target.value[1]})
      }else{
        this.setState({price:e.target.value})
      }
    }
  }

  onDeleteClick=(index)=>{
    Axios.delete(`${API_URL}/products/${this.state.Product[index].id}`)
    .then(()=>{
      Axios.get(`${API_URL}/products`)
      .then((res)=>{
        this.setState({Product:res.data})
      }).catch((err)=>{
        console.log(err)
      })
    })
  }

  toggle=()=>{
    console.log(this.state.modal)
    this.setState({...this.state, modal:!this.state.modal, seat:'', price:''})
  }

  toggleedit=()=>{
    this.setState({...this.state, modaledit:!this.state.modaledit, seat:'', price:''})
  }


  closeBtn = <button onClick={this.toggle}> &times; </button>
  closeBtnedit = <button onClick={this.toggleedit}> &times; </button>
  
  render() {
    
    return(
      <>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={this.closeBtn}> Insert New Trip </ModalHeader>
          <ModalBody>
            <label> Trip Title </label>
            <div>
              <input type='text' ref={this.state.nametrip} placeholder='Insert New Trip Title' />
            </div>
            <label> Illustrasi Photo </label>
            <div>
              <input type='text' ref={this.state.photo} placeholder='Insert Trip Documentation Photo' />
            </div>
            <label> Start Trip Date </label>
            <div>
              <input type='date' ref={this.state.starttripdate}   />
            </div>
            <label> End Trip Date </label>
            <div>
              <input type='date' ref={this.state.endtripdate}   />
            </div>
            <label> Seat </label>
            <div>
              <input type='text' value={this.state.seat} onChange={this.onSeatChange} placeholder='Insert Max Person'  />
            </div>
            <label> Price </label>
            <div>
              <input type='text' value={this.state.price} onChange={this.onPriceChange} placeholder='Insert Trip Price'  />
            </div>
            <label> Final Register Date </label>
            <div>
              <input type='date' ref={this.state.regdate}   />
            </div>
            <label> Description </label>
            <div>
              <input type='text' ref={this.state.desc} placeholder='Insert Trip Small Description'  />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onAddDataClick}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        {
          this.state.Product.length?
          <Modal isOpen={this.state.modaledit} toggle={this.toggleedit}>
            <ModalHeader toggle={this.toggleedit} close={this.closeBtnedit}> Edit Trip </ModalHeader>
            <ModalBody>
              {/* <label> Edit Trip Title </label>
              <div>
                <input type='text' defaultValue={this.state.Product[this.state.indexedit].nametrip} placeholder='Insert New Trip Title' />
              </div> */}
              {/* <label> Illustrasi Photo </label>
              <div>
                <input type='text' ref={this.state.photo} defaultValue={this.state.Product[index].nametrip} placeholder='Insert Trip Documentation Photo' />
              </div>
              <label> Start Trip Date </label>
              <div>
                <input type='date' ref={this.state.starttripdate}   />
              </div>
              <label> End Trip Date </label>
              <div>
                <input type='date' ref={this.state.endtripdate}   />
              </div>
              <label> Seat </label>
              <div>
                <input type='text' value={this.state.seat} onChange={this.onSeatChange} placeholder='Insert Max Person'  />
              </div>
              <label> Price </label>
              <div>
                <input type='text' value={this.state.price} onChange={this.onPriceChange} placeholder='Insert Trip Price'  />
              </div>
              <label> Final Register Date </label>
              <div>
                <input type='date' ref={this.state.regdate}   />
              </div>
              <label> Description </label>
              <div>
                <input type='text' ref={this.state.desc} placeholder='Insert Trip Small Description'  />
              </div>*/}
            </ModalBody> 
            <ModalFooter>
              <Button color="primary" onClick={this.onAddDataClick}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          :
          null
        }
        <div className='d-flex'>
          <div className='css-sidebar'>
            <div className='css-company'> 
              <div className='css-companyname'> FAR </div> 
              <img className='css-companylogo'  
                src={Logo}
                alt='logo-black'
              />
              <div className='css-companyname'> WAY </div>
            </div>
            <div className='css-profile'>
              <img className='css-profilepic'
                src={Logo}
                alt='Profile Pic'
              />
              <div className='css-profilename'> Muhammad Fitrah Pratama </div>
              <div className='css-profilerole'> Senior Web & Mobile Developer </div>
            </div>
            <div className='css-sidebarmenu'>
              <div className='css-barmenu'>
                <MdDashboard className='css-barmenuicon'/>
                <div className='css-barmenutitle'> Dashboard </div>
              </div>
              <div className='css-barmenu'>
                <BiCalendar className='css-barmenuicon'/>
                <div className='css-barmenutitle'> Calendar </div>
              </div>
              <div className='css-barmenu'>
                <BiListUl className='css-barmenuicon'/>
                <div className='css-barmenutitle'> Project List </div>
              </div>
              <div className='css-barmenu'>
                <BsTools className='css-barmenuicon'/>
                <div className='css-barmenutitle'> Utilities </div>              
              </div>
              <div className='css-barmenu'>
                <BiSupport className='css-barmenuicon'/>
                <div className='css-barmenutitle'> Support Tickets </div>              
              </div>
            </div>
          </div>
          <div className='css-componentbar'>
            <div className='css-componenttitle '>
              <div className='css-title'> 
                Product List
              </div>
              <button className='css-button' onClick={this.toggle}> + Add New Trip</button>
            </div>
            <div className='css-productlist'>
              <div className='css-productlistheader'>
                <div className='css-productlistcategory css-listno'> 
                  No 
                </div>
                <div className='css-productlistcategory css-listnametrip'>
                  Trip Title
                </div>
                <div className='css-productlistcategory css-listphoto'>
                  Photo
                </div>
                <div className='css-productlistcategory css-listtripdate'>
                  Trip Date
                </div>
                <div className='css-productlistcategory css-listseat'>
                  Seat
                </div>
                <div className='css-productlistcategory css-listprice'>
                  Price
                </div>
                <div className='css-productlistcategory css-listregdate'>
                  Register Date
                </div>
                <div className='css-productlistcategory css-listdesc'>
                  Trip Caption
                </div> 
                <div className='css-productlistcategory css-listaction'>
                  Actions
                </div>   
              </div> 
            </div> 
            {this.renderProductTable()}
          </div>
        </div>
      </>
    ) 
  }
}
 
export default Admin;