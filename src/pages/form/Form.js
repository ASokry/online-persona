import React,{useState,useEffect} from 'react';
import { Button, CustomInput, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Form.css'
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

export default function MyForm() {
    const [idNum,setIdNum] = useState(0);
    const [users,setUsers] = useState([]);

    //// Question Variables
    const [ageGroups] = useState(["youth", "young adult", "middle age", "older age"]);
    const [ageGroup,setAgeGroup] = useState("");
    const [genders] = useState(["male", "female", "nonbinary", "trans", "genderqueer", "agender", "other", ""]);
    const [genderIRL,setGenderIRL] = useState("");
    const [desPersona, setDesPersona] = useState("");
    const [numPersona, setNumPersona] = useState(0);
    const [genderPersona, setGenderPersona] = useState({
      objects: [
        {id: 0, val: ""},
        {id: 0, val: ""},
        {id: 0, val: ""},
        {id: 0, val: ""},
        {id: 0, val: ""},
        {id: 0, val: ""},
        {id: 0, val: ""},
        {id: 0, val: ""}
      ]
    }); 

    const [digitalRep,setDigitalRep] = useState(5);
    const [platform, setPlatform] = useState("");
    const [onlineTime, setOnlineTime] = useState(0);
    const [whatTime, setWhatTime] = useState("");
    const [thinkOften, setThinkOften] = useState(5);
    const [speakPersona, setSpeakPersona] = useState(false);
    const [conductPersona, setConductPersona] = useState("");
    const [versionPersona, setVersionPersona] = useState("");
    const [twoPlaces, setTwoPlaces] = useState(false);
    ////

    function changeValue(checked, arr,index, val) {
      let arrayCopy = [...arr.objects]
      if(checked){
        arrayCopy[index].val = val
      }
      else{
        arrayCopy[index].val = null
      }
      setGenderPersona({...arr, objects: arrayCopy});
    }

    useEffect(()=>{readUser()}, []);

    function RandomString(leng) {
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';
      for ( var i = 0; i < leng; i++ ) {
          result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      return result;
  }

    // console.log(users[users.length-1] && users[users.length-1].id);
    function writeUserData() {
      readUser();
      
      let obj = {
          age: ageGroup,
          gender: genderIRL,
          describePersona: desPersona,
          numberOfPersona: numPersona,
          genderPersonas: genderPersona,
          digitalRepresentation: digitalRep,
          platforms: platform,
          online: onlineTime + whatTime,
          thinking: thinkOften,
          speech: speakPersona,
          conduct: conductPersona,
          version: versionPersona,
          place: twoPlaces
      }
      firebase.database().ref('responses/' + 'user' + idNum).set(obj);
    }
    
    function readUser() {
      firebase.database().ref('responses').on('value',(snapshot)=>{
          let temp = [];
          if(snapshot.val() != null) {
              for (const [key, value] of Object.entries(snapshot.val())) {
                  temp[temp.length] = value;
                }
              setUsers(temp);
              setIdNum(temp.length + RandomString());
          }
      })
    }

    function handleSubmit(event) {
        // console.log("submitted");
        event.preventDefault();
        writeUserData();
        window.location.href = process.env.PUBLIC_URL + "/#/about";
    }

    // console.log(onlineTime + whatTime);
    const Example = () => {
        return (
          <Form onSubmit={(event)=>{handleSubmit(event)}}>
            <FormGroup tag="fieldset">
              <Label className="question-title">What is your age group?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" id="q1-0" value={ageGroups[0]} onClick={(event)=>{setAgeGroup(event.target.value)}}/>
                  17 or lower
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" id="q1-1" value={ageGroups[1]} onClick={(event)=>{setAgeGroup(event.target.value)}}/>
                  18 - 35
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" id="q1-2" value={ageGroups[2]} onClick={(event)=>{setAgeGroup(event.target.value)}}/>
                  36 - 55
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" id="q1-3" value={ageGroups[3]} onClick={(event)=>{setAgeGroup(event.target.value)}}/>
                  56 or older
                </Label>
              </FormGroup>
            </FormGroup>

            <br></br><br></br>
            
            <FormGroup tag="fieldset">
              <Label className="question-title">What gender do you identify with?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-0" value={genders[0]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-1" value={genders[1]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Female
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-2" value={genders[2]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Nonbinary
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-3" value={genders[3]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Trans
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-4" value={genders[4]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Genderqueer
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-5" value={genders[5]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Agender
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-6" value={genders[6]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Other
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" id="q2-7" value={genders[7]} onClick={(event)=>{setGenderIRL(event.target.value)}}/>
                  Prefer Not to Answer
                </Label>
              </FormGroup>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">In your own words, please briefly describe what an <b>online persona</b> is.</Label>
              <Input type="textarea" name="text1" id="q3" 
                onChange={(event)=>{setDesPersona(event.target.value)}}
              />
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">How many <b>online personas</b> do you think you have?</Label>
              <Input
                type="number"
                name="number1"
                id="q4"
                onChange={(event)=>{setNumPersona(event.target.value)}}
              />
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">What gender(s) does your <b>online persona(s)</b> identify with?</Label>
              <div>
                <CustomInput type="checkbox" id="q5-0" label="Male" 
                  value={genders[0]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,0,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-1" label="Female"
                  value={genders[1]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,1,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-2" label="Nonbinary"
                  value={genders[2]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,2,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-3" label="Trans"
                  value={genders[3]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,3,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-4" label="Genderqueer" 
                  value={genders[4]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,4,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-5" label="Agender"
                  value={genders[5]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,5,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-6" label="Other"
                  value={genders[6]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,6,event.target.value)}}
                />
                <CustomInput type="checkbox" id="q5-7" label="Prefer Not to Answer"
                  value={genders[7]} onClick={(event)=>{changeValue(event.target.checked,genderPersona,7,event.target.value)}}
                />
              </div>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">How much do you view your <b>online persona(s)</b> as something more than a digital representation?</Label>
              <CustomInput type="range" id="q6" name="range1" 
                min={0}
                max={10}
                step={1}
                defaultValue={5}
                onChange={(event)=>{setDigitalRep(event.target.value)}}
              />
              <h1 className="numeric-rep">{digitalRep}</h1>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">On what online platforms, or "digital ecosystems", does your <b>online persona(s)</b> exist? (social media, video games, text, forums, video etc.) Be specific.</Label>
              <Input type="textarea" name="text2" id="q7" 
                onChange={(event)=>{setPlatform(event.target.value)}}
              />
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">Generally, how often do you stay online per day as your <b>online persona(s)</b>?</Label>
              <div>
                <CustomInput type="number" id="q8-0" min="0" placeholder="number" onChange={(event)=>{setOnlineTime(Math.abs(event.target.value))}} inline />{' '}
                <CustomInput type="radio" id="q8-1" name="radio3" label="Seconds" value="sec" onClick={(event)=>{setWhatTime(event.target.value)}} inline />
                <CustomInput type="radio" id="q8-2" name="radio3" label="Minutes" value="min" onClick={(event)=>{setWhatTime(event.target.value)}} inline />
                <CustomInput type="radio" id="q8-3" name="radio3" label="Hours" value="hr" onClick={(event)=>{setWhatTime(event.target.value)}} inline />
              </div>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">When you're offline, how often do you think of your <b>online persona(s)</b>? (0=never,10=all the time)</Label>
              <CustomInput type="range" id="q9" name="range2" 
                min={0}
                max={10}
                step={1}
                defaultValue={5}
                onChange={(event)=>{setThinkOften(event.target.value)}}
              />
              <h1 className="numeric-rep">{thinkOften}</h1>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">Does your <b>online persona(s)</b> have a different way of speaking than you?</Label>
              <div>
                <CustomInput type="radio" id="q10-0" name="radio4" label="Yes" onClick={()=>{setSpeakPersona(true)}}/>
                <CustomInput type="radio" id="q10-1" name="radio4" label="No" onClick={()=>{setSpeakPersona(false)}}/>
              </div>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">In one or two words, how does your <b>online persona(s)</b> conduct themselves when communicating or interacting with others?</Label>
              <Input type="textarea" name="text3" id="q11" 
                onChange={(event)=>{setConductPersona(event.target.value)}}
              />
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">Overall, is your <b>online persona(s)</b>:</Label>
              <div>
                <CustomInput type="radio" id="q12-0" name="radio5" label="A more ideal version of you " onClick={()=>{setVersionPersona("more")}}/>
                <CustomInput type="radio" id="q12-1" name="radio5" label="Nearly identical to you" onClick={()=>{setVersionPersona("same")}}/>
                <CustomInput type="radio" id="q12-2" name="radio5" label="A lesser version of you" onClick={()=>{setVersionPersona("lesser")}}/>
              </div>
            </FormGroup>
            <br></br><br></br>
            <FormGroup>
              <Label className="question-title">Do you ever feel like you are in two different places at once when you are online?</Label>
              <div>
                <CustomInput type="radio" id="q13-0" name="radio6" label="Yes" onClick={()=>{setTwoPlaces(true)}}/>
                <CustomInput type="radio" id="q13-1" name="radio6" label="No" onClick={()=>{setTwoPlaces(false)}}/>
              </div>
            </FormGroup>
            <br></br><br></br>
            <Button>Submit</Button>
          </Form>
        );
      }
    return (
        <div className="form">
            {/* {users && users.map((stuff,index)=>(
                <h1 key={index}> 
                    {stuff.age}
                </h1>
            ))} */}

            <div className="form-header">
                <h1>Online <b style={{color: "#9900ff"}}>Persona</b></h1>
                <div className="form-description">
                  Take your time filling out this form. After the form has been filled out completely, please click on the Submit button at the bottom of the page.
                </div>
                <nav><Link to="/">HOME</Link> | <Link to="/form">TAKE THE SURVEY</Link> | <Link to="/about">ABOUT</Link></nav>
            </div>
            <div className="form-questions">
              {Example()}
            </div>
        </div>
    );
}