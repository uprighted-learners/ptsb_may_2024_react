const AboutMe = (props) => {

    console.log(props.myName);
    return (
      <>
        {
        props.myName ?
        <h3>Hello {props.myName}</h3>
        : 
        <h3>No name provided</h3>
        }
      
      </>
    )


}


export default AboutMe;