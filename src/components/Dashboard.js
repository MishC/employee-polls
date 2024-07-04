import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import Nav from "./Nav/Nav";
import Avatar from "react-avatar";


const Dashboard=({authedUser})=> {
    console.log(authedUser);
  const {id,name} =authedUser.user;
    return (
        <div className="Dashboard">
        <Nav/>
        {authedUser?
      <Fragment>
        
        <h1>Name: {name} </h1>
        <Avatar
          style={{width: '100px', height: '100px'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />

        <Avatar
        name={name}
        size="150"
        round="50%"
        className="avatar"
        src="" 
      />
      </Fragment>:  <Fragment>    <Link>You are not signed in!</Link></Fragment>}

    </div>);
  }
  const mapStateToProps = ({ authedUser}) => ({
    authedUser: authedUser,
   // users:users[id]
    
  });
  
  export default connect(mapStateToProps)(Dashboard);