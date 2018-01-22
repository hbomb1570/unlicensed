import React from 'react'
import { connect } from 'react-redux'
import { TextField, Checkbox, Avatar, withStyles } from 'material-ui'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { personalInfo, setProfilePic } from './../../ducks/reducers/userReducer'

const PersonalInfo = ({
  classes, firstName, lastName, phone, text, call, both, email, bio, profilePic, picName, location, personalInfo, setProfilePic,
}) => (
  <div>
    <h3>Step 1: Tell us about yourself...</h3>
    <FormGroup>
      <TextField label="First Name" name="firstName" value={firstName} onChange={e => personalInfo(e)} />
      <TextField label="Last Name" name="lastName" value={lastName} onChange={e => personalInfo(e)} />
      <TextField label="Phone Number" name="phone" value={phone} onChange={e => personalInfo(e)} />
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox label="Text" name="text" checked={text} onClick={e => personalInfo(e, text)} />
        }
          label="Text"
        />
        <FormControlLabel
          control={
            <Checkbox label="Call" name="call" checked={call} onClick={e => personalInfo(e, call)} />
        }
          label="Call"
        />
        <FormControlLabel
          control={
            <Checkbox label="Both" name="both" checked={both} onClick={e => personalInfo(e, both)} />
        }
          label="Both"
        />
      </FormGroup>
      <TextField label="Zip Code" name="location" value={location} onChange={e => personalInfo(e)} />
      <Dropzone multiple={false} accept="image/*" onDrop={e => setProfilePic(e[0])}>
        {profilePic ?
          <div>
            <h3>{picName}</h3>
            <Avatar src={profilePic} className={classes.avatar} />
          </div>
          :
          <p>Drag and drop a picture here to use as your profile picture or click to select a file.</p>
          }
      </Dropzone>
      <TextField label="Email" name="email" value={email} onChange={e => personalInfo(e)} />
      <TextField multiline rowsMax="5" label="Bio" name="bio" value={bio} onChange={e => personalInfo(e)} />
    </FormGroup>
  </div>
)

const styles = {
  avatar: {
    height: 150,
    width: 150,
  },
}

const mapStateToProps = state => ({
  firstName: state.userReducer.firstName,
  lastName: state.userReducer.lastName,
  phone: state.userReducer.phone,
  text: state.userReducer.text,
  call: state.userReducer.call,
  both: state.userReducer.both,
  profilePic: state.userReducer.profilePic,
  picName: state.userReducer.picName,
  email: state.userReducer.email,
  bio: state.userReducer.bio,
  location: state.userReducer.location,
})


export default connect(mapStateToProps, { personalInfo, setProfilePic })(withStyles(styles)(PersonalInfo))

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  text: PropTypes.bool.isRequired,
  call: PropTypes.bool.isRequired,
  both: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  personalInfo: PropTypes.func.isRequired,
  profilePic: PropTypes.string.isRequired,
  picName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  setProfilePic: PropTypes.func.isRequired,
}