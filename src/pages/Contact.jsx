import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useFetch from "../useFetch";
import '../app.css';

const Contact = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

    

    if (loading) return <h1>Loading ...</h1>;

    if (error) console.log(error);

    const {id}=useParams()
        const post = data?.find((item) => item.id == id);

    return(
        <div className="w-full  pb-10 bg-blue-100 min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" }}>

            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 

            {/*Content */}
            <div className="max-w-[1240px] mx-auto">
                <div className="flex items-center mx-auto w-auto rounded-4xl h-auto my-10 ">

                    <div className="bg-white  h-full w-full mx-auto overflow-hidden drop-shadow-lg ">
                        <img className="h-90 w-full object-cover " src="https://static.clubs.nfl.com/image/private/f_auto/ravens/anw0lbvzibgvzpjcgjhi" alt="Contact" />
                            <div className="p-6">
                            <h3 className="font-bold text-2xl my-1 text-center">Contact US</h3>
                             </div>

                           <div className="container">
                                <form action="action_page.php">

                                      <label for="fname">First Name</label>
                                      <input type="text" id="fname"  placeholder="Your name.."/>
    

                                      <label for="lname">Last Name</label>
                                      <input type="text" id="lname"  placeholder="Your last name.."/>

                                      <label for="country">Country</label>
                                         <select id="country" name="country">
                                             <option value="australia">Australia</option>
                                            <option value="canada">Canada</option>
                                            <option value="usa">USA</option>
                                            <option value="usa">Egypt</option>
                                            <option value="usa">Palestine</option>
                                        </select>

                                      <label for="subject">Subject</label>
                                      <textarea id="subject" name="subject" placeholder="Write something.." className="h-70"></textarea>

                                      <input type="submit" value="Submit"/>

                                </form> 
                           </div>
                   </div>

                </div> </div>
                 
                 <Footer />
                
                </div>
                    
                
             

            
            
            
       
    )


}


export default Contact