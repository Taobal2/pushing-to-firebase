import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../../myFirebase";
import firebase from "firebase/compat";

const Settings = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [vocation, setVocation] = useState("");
  const [count, setCount] = useState("");
  const [percentage, setPercentage] = useState(0.0001);
  const [storageImage, setStorageImage] = useState("");

  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const saveFile = URL.createObjectURL(file);
    setImage(saveFile);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("bio/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,

      (snapshot) => {
        const count = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(count);
        setPercentage(count);
      },

      (err) => console.log(err.message),

      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setStorageImage(URL);
        });
      }
    );
  };

  const pushToBackEnd = async () => {
    await app.firestore().collection("bio").doc().set({
      storageImage,
      name,
      location,
      contact,
      mobileNumber,
      vocation,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setStorageImage("");
    setName("");
    setLocation("");
    setContact("");
    setMobileNumber("");
    setVocation("");
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <ImageHolder>
            <div>{percentage}</div>
            <Image src={image} />
            <Label htmlFor="pix">Uploade your Photo</Label>
            <LabelInput type="file" id="pix" onChange={uploadImage} />
          </ImageHolder>

          <Content>
            <ContentHolder>
              <MainLabel>Full Name</MainLabel>
              <MainInput
                placeholder="Fullname"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </ContentHolder>
            <ContentHolder>
              <MainLabel>Contact</MainLabel>
              <MainInput
                placeholder="Contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </ContentHolder>
            <ContentHolder>
              <MainLabel>Mobile Number</MainLabel>
              <MainInput
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
              />
            </ContentHolder>
            <ContentHolder>
              <MainLabel>Location</MainLabel>
              <MainInput
                placeholder="Location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </ContentHolder>
            <ContentHolder>
              <MainLabel>Vocation</MainLabel>
              <MainInput
                placeholder="Vocation"
                value={vocation}
                onChange={(e) => {
                  setVocation(e.target.value);
                }}
              />
            </ContentHolder>
          </Content>

          <Button onClick={pushToBackEnd}>Add up</Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Settings;

const Button = styled.div`
  margin-top: 30px;
  width: 60%;
  height: 50px;
  background-color: coral;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border-radius: 5px;
  transform: scale(1);
  transition: all 400ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;

const MainLabel = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const MainInput = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  border: 0px;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding-left: 10px;
  font-size: 16px;
`;

const LabelInput = styled.input`
  display: none;
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 20px 0;
  color: white;
  background-color: blue;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 400ms;
  transform: scale(1);

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 5px;
  object-fit: cover;
  background-color: red;
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
