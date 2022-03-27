import React,{useState} from 'react';
import styles from  './Header.module.scss';
import {
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
  MDBDropdown,
  MDBDropdownLink,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownDivider,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse

} from 'mdb-react-ui-kit';


const Header = ({round}) => {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <div className={styles.stickyHeader}>
    <div className='d-none d-md-block' style={{ width: '100%', minHeight: 150, position: "relative",backgroundColor:"white" }}>
          <img src='images/header-top.png' style={{ width: '100%' }} />
           <h1 className='d-none d-md-block'  style={{ right: '22%', top: '.8rem', position: "absolute", color: "#038563",fontFamily: 'Arima Madurai' }} >Nirnayan HealthCare</h1>

      <div className="row justify-content-md-center w-100 " style={{ height: 60 }} >
        <div className="col-sm-5" >
          {round?  <img src='images/icons/nirnayan-logo-small.png' style={{
         "width":"16%","height":"60%","position":"absolute","top":"1.2rem","left":"6rem"
        }} />: <img src='images/icons/nirnayan-logo.png' style={{
          width: '25%',
          height: '60%',
          position: "absolute",
          top: "1.5rem",
          left: "4rem"
        }} />}
         </div>
        <div className="col-sm-2 align-self-end text-center ">

          {/* <MDBInputGroup className='w-75 ' style={{ float: "right" }} >
            <MDBInputGroupElement type='text' value="Kolkata" style={{ border: "1.8px solid green" }} />
            <MDBDropdown  >
              <MDBDropdownToggle className='bg-warning text-dark' style={{ boxShadow: "none",padding: '8.5px 22.5px',
    
    borderRadius: 0 }}>
                <span className='visually-hidden'>Toggle Dropdown</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink>Action</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink>Another action</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink>Something else here</MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBInputGroup> */}

          <div className='d-flex' style={{width:'75%',height:32, border: "2px solid green",borderRadius:5}}>
            <div style={{flex:2}}>Kolkata</div>
            <div style={{backgroundColor:"#ffc107",flex:1}}> <MDBIcon fas icon="chevron-down"  size='1x' /></div>

          </div>
        </div>
        <div className="col-sm-2 align-self-end text-center">
          <div className="d-flex pr-3 justify-content-center">
            <div><img src='images/icons/search.png' width={25} alt="search icon" /></div>
            <div className="px-2"> <input style={{ border: "none", width: 100, paddingLeft: 10 }} placeholder="Serach" /></div>
          </div>

        </div>
        <div className="col-sm-2 align-self-end">
          <div className="d-flex">
            <div><img src='images/icons/contact.png' width={20} alt="search icon" /></div>
            <div className="px-2 font-weight-bold">9874555621</div>
          </div>

        </div>
        <div className="col-sm-1 align-self-end">
          <div className="d-flex align-items-end justify-content-end">
            <div className="px-2 d-none d-lg-block"><h5 className='font-weight-bold'>Login</h5></div>
            <div><img src='images/icons/user.png' width={35} alt="User" /></div>

          </div>
        </div>
      </div>
      <div className='d-none d-md-block' style={{ width: '100%', height: '50px', marginTop: 15, backgroundColor: "#c4e6d0", position: "relative" }}>

        <div className="d-flex justify-content-between align-items-center h-100 mx-4">
          <div className='d-flex justify-content-around' style={{ width: '50rem' }}>
            <div >About Us <MDBIcon fas icon="chevron-down"  size='1x' /></div>
            <div className={styles.active}>Patients <MDBIcon fas icon="chevron-down"  size='1x' /></div>
            <div>Laboratory <MDBIcon fas icon="chevron-down"  size='1x' /></div>
            <div>Science Behind <MDBIcon fas icon="chevron-down"  size='1x' /></div>
            <div>Blogs <MDBIcon fas icon="chevron-down"  size='1x' /></div>
            <div>Association <MDBIcon fas icon="chevron-down"  size='1x' /></div>

          </div>
          <div className='position-relative'><img src='images/icons/basket.png' width={25} alt="search icon" /><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{ fontSize: 10 }}>
            0
            <span className="visually-hidden">unread messages</span>
          </span></div>
        </div>
      </div>
      </div>


      <div className='d-block d-md-none' style={{ width: '100%',height:70, position: "relative",backgroundColor:"white" }}>
      <div className="d-flex pr-3 justify-content-center position-absolute" style={{    right: '3%',
    top: '15px'}}>
            <div><img src='images/icons/search.png' width={25} alt="search icon" /></div>
            <div className="px-2"> <input style={{  width:'80%',borderRadius:10,borderColor:"green" }} placeholder="Serach" /></div>
          </div>
          <div className="col-sm-5" ><img src='images/icons/nirnayan-logo.png' style={{
          "width":"32%","height":"68%","position":"absolute","top":"0.7rem"
        }} /></div>
           <img src='images/header-top.png' style={{ width: '100%',height:60 }} />
         
           <MDBNavbarToggler
           style={{"right":"12px","bottom":"23px","fontSize":"24px","position":"absolute"}}
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

           <MDBNavbar expand='lg' light bgColor='light' style={{zIndex:1}}>
      <MDBContainer fluid>
        
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav className="text-center">
            <MDBNavbarLink active aria-current='page' href='#' style={{color:'#009448'}}>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink style={{color:'#009448'}} href='#' >About Us</MDBNavbarLink>
            <MDBNavbarLink style={{color:'#009448'}} href='#'>Patients</MDBNavbarLink>
            <MDBNavbarLink style={{color:'#009448'}} href='#'>Laboratory</MDBNavbarLink>
            <MDBNavbarLink style={{color:'#009448'}} href='#'>Science Behind
           </MDBNavbarLink>
           <MDBNavbarLink style={{color:'#009448'}} href='#'>
            Blogs
           </MDBNavbarLink>
           <MDBNavbarLink style={{color:'#009448'}} href='#'>Association
           </MDBNavbarLink>
           <MDBNavbarLink className='position-relative' style={{color:'#009448'}} href='#'>
         Cart  <img src='images/icons/basket.png' width={25} alt="search icon" /><span className="position-absolute top-1  translate-middle badge rounded-pill bg-danger " style={{ fontSize: 10 }}>
            0
            <span className="visually-hidden">unread messages</span>
          </span>
             </MDBNavbarLink>
            
            <MDBNavbarLink style={{color:'#009448'}} href='#'><div className="d-flex justify-content-center">
            <div><img src='images/icons/contact.png' width={20} alt="search icon" /></div>
            <div className="px-2 font-weight-bold">9874555621</div>
          </div></MDBNavbarLink>
          <MDBNavbarLink style={{color:'#009448'}} href='#'><div className="d-flex justify-content-center align-items-baseline">
            <div><img src='images/icons/user.png' width={25} alt="User" /></div>
            <div className="px-2"><h5 className=''>Login</h5></div>

          </div></MDBNavbarLink>


           
          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>


      </div>

    
    
    
    
    </div>


  )
}

export default Header