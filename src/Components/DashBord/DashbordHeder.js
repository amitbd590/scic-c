import React, { useRef, useState, useEffect } from "react";
import logo from "../../img/2.webp";
import dash from '../../img/dashbord.png'
import useFireBase from "../../Hook/FireBase/FireBase";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
const DashbordHeader = () => {
  const { user, logOut } = useAuth();


  const [admin, setAdmin] = useState([]);

    useEffect(() => {
      fetch("https://tranquil-lowlands-76432.herokuapp.com/admin")
        .then((res) => res.json())
        .then((data) => setAdmin(data));
    }, []);


   

  // Realod function

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light  nav-text">
        <div className="container">
          <Link class="nav-link" to="/home">
            {" "}
           <h2 className="text-light"> Nancy Chair</h2>
          </Link>

          {user.email && (
              
             <div className='dashBordLogo'>
                <img className='img-fluid dashImg' src={dash} alt="" />
              <h2 className='dashText'>DashBord</h2>
             </div>
            
            ) }

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/myOrder">
                  My Order
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/payment">
                  Payment
                </Link>
              </li>
              
              


              {
                admin.map((admin)=>(<div admin={admin}>
                  {
                    admin.AdminEmail==user.email&& <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      CONTROL
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      
                      {user.email && (
                        <Link to="/addnewService" className=" dropdown-item ">
                          Add New Product
                        </Link>
                      )}
                      {user.email && (
                        <Link to="/manageService" className=" dropdown-item ">
                          Manage All Product
                        </Link>
                      ) }
                      {user.email && (
                        <Link to="/make_an_admin" className=" dropdown-item ">
                          Make An Admin
                        </Link>
                      ) }
                      {user.email && (
                        <Link to="/manage_all_order" className=" dropdown-item ">
                          Magane All Order
                        </Link>
                      ) }
                    </div>
                  </li>
                  }
                </div>))
              }

              


              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  CONTROL
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                  {user.email && (
                    <Link to="/addnewService" className=" dropdown-item ">
                      Add New Product
                    </Link>
                  )}
                  {user.email && (
                    <Link to="/manageService" className=" dropdown-item ">
                      Manage All Product
                    </Link>
                  ) }
                  {user.email && (
                    <Link to="/make_an_admin" className=" dropdown-item ">
                      Make An Admin
                    </Link>
                  ) }
                  {user.email && (
                    <Link to="/manage_all_order" className=" dropdown-item ">
                      Magane All Order
                    </Link>
                  ) }
                </div>
              </li> */}
              
              
            </ul>

            {user.email ? (
              <div>
                <button className="btn btn-success mr-2" onClick={logOut}>Log Out</button>
                <span className="text-danger">{user.displayName}</span>
              </div>
            ) : (
              <Link className="btn btn-success" to="/Register">
                Register
              </Link>
            )}
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashbordHeader;
