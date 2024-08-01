import { useState, useEffect } from "react";

const HookUseEffect = () => {
    const [count, setCount] = useState(0)
    const [myName, setMyName] = useState("")
  //? useEffect
  /*
        - Takes in a callback function
        - By default, runs on every render. (note: state updates cause a re-render).
        - Can be provided with an optional dependency array, to control when it executes.
        - Allow the use of side effects, actions which are to occur when something changes
        - Allows the cleanup of network requests, event listeners, timers...etc
        - Access to the main React lifecycle methods (Component => Mounted, Unmounted, Updated)


        ? Syntax:
            useEffect(() => {
                
                
            }, [])

            The second argument is optional []
                - If provided, the callback will execute on the initial mount of component
                - If dependencies are provided, will execute on initial mount and if ANY values of the deps change.

    */


    //? Do some type of action on initial mount of component
    // useEffect(() => {
    //     console.log("Showing on initial mount only");

      //? Do some type of action when component unmounts
    //     return () => console.log("Shown when component unmounts");
    // },[])

    //? Do some type of action when any state changes in the component
    // useEffect(() => {
    //     console.log("Component mounted, OR state was changed");
    // })

    //? Do some type of action based on something specific changing in the component
    // useEffect(() => {
    //     console.log("Component mounted OR count was changed");
    // }, [count])


    //! Example of setTimeout in useEffect
    //! Be caution of infinite loops
    // useEffect(() => {
    //     console.log("I am rendering");
        
    //     setCount(prev => prev+1)
    //     // setInterval(setCount(prev => prev+1), 1000)
    // })
    //! Dependencies should NOT be set within the useEffect
    // useEffect(() => {
    //     console.log("I am rendering");
        
    //     setCount(prev => prev+1)
    //     // setInterval(setCount(prev => prev+1), 1000)
    // },[count])

    useEffect(() => {
        console.log("I am rendering");
        let interval = setInterval(() => setCount(prev => prev+1), 1000)
        return () => clearInterval(interval)
    },[])



  


  return <div>

    <h3>{count}</h3>
    <button onClick={() => setCount(prev => prev+1)}>Increase</button>

    {/* <button onClick={() => setMyName("Amit")}>Change name</button> */}
  </div>;
};

export default HookUseEffect;
