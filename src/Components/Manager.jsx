import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
function Manager() {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ URL: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const ShowPassword = () => {
        passwordRef.current.type = 'text'
        console.log(ref.current.src);
        if (ref.current.src.includes("Icon/hidden.png")) {
            ref.current.src = "Icon/eye.png";
            passwordRef.current.type = 'password';
        } else {
            passwordRef.current.type = 'text';
            ref.current.src = "Icon/hidden.png";
        }
    }

    const SavePassword = () => {
        if(form.URL.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log(...passwordArray, form);
            setForm({ URL: "", username: "", password: "" })
            toast('Password Saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('Error: Password not Saved!', {
                theme: "dark",
            })
        }
    }
    const deletePassword = (id) => {
        console.log("Delete Password with ID", id);
        let c = confirm("Are you sure you want to delete this password?");
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
         toast('Password Deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        
    }

    const editpassword = (id) => {
        console.log("Edit Password with ID", id);
        setForm(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

                <div className="p-2 pt-3 md:mycontainer min-h-[95.9vh]">
                    <h1 className='text-4xl font-bold text-center'>
                        <span className='text-green-500'> &lt;</span>
                        Pass
                        <span className='text-green-500'>OP/ &gt;</span>
                    </h1>
                    <p className='text-green-800 text-lg text-center'>Your Own Password Manager</p>
                    <div className='text-black flex flex-col p-4 gap-8 justify-center items-center'>
                        <input value={form.URL} onChange={handleChange} className='rounded-full border border-green-500 w-full p-4 py-1'
                            placeholder='Enter Website URL' type="text" name='URL' id='' />
                        <div className="flex flex-col md:flex:row w-full justfy-between gap-4 mt-4">
                            <input value={form.username} onChange={handleChange} className='rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter Username' type="text" name='username' id='username' />
                            <div className="relative">
                                <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter Password' type="password" name='password' id='password' />
                                <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={ShowPassword}>
                                    <img ref={ref} className='p-1' width={26} src="./Icon/eye.png" alt="" srcset="" />
                                </span>
                            </div>
                        </div>

                        <button onClick={SavePassword} className='flex justify-center items-center bg-green-600 hover:bg-green-400 rounded-xl hover:rounded-full px-5 py-2 w-fit border-1 border-green-900'>
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover">
                            </lord-icon>
                            Save
                        </button>
                    </div>
                    <div className="passwords">
                        <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                        {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                        {passwordArray.length !== 0 && <table class="table-auto w-full rounded-md overflow-hidden mb-10">
                            <thead className='bg-green-700 text-white'>
                                <tr>
                                    <th className='py-2'>URL</th>
                                    <th className='py-2'>username</th>
                                    <th className='py-2'>password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100 '>
                                {passwordArray.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className='flex items-center justify-between py-2 border-1 border-white text-center'><a href={item.URL} target='_blank'>{item.URL}</a>

                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.URL)}>
                                                <lord-icon
                                                    style={{ width: '25px', height: '25px', "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>

                                            </div>
                                        </td>

                                        <td className='py-2 border-1 border-white text-center'>
                                            <div className='flex items-center justify-between'>
                                                <span>{item.username}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)} >
                                                    <lord-icon
                                                        style={{ width: '25px', height: '25px', "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='justify-center py-2 border-1 border-white text-center'>
                                            <div className='flex items-center justify-between'>
                                                <span>{item.password}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
                                                    <lord-icon
                                                        style={{ width: '25px', height: '25px', "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='justify-center py-2 border-white text-center'>
                                            <span className='cursor-pointer mx-1' onClick={() => deletePassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/xyfswyxf.json"
                                                    style={{ width: '25px', height: '25px', "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => editpassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/ibckyoan.json"
                                                    trigger="hover"
                                                    style={{ width: '25px', height: '25px', "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}

                    </div>
                </div>


            </div>
        </>
    )
}

export default Manager