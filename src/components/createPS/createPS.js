import { React, useMemo } from 'react'
import CreatePscss from './createPS.module.css'
import { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { axiosApi } from '../../defz';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function CreatePs() {

    const [name, setName] = useState('')
    const [In, setIn] = useState('')
    const [bt_md, setBt_md] = useState('')
    const [srvD, setSrvD] = useState('')
    const [srv, setSrv] = useState([])
    const [status, setStatus] = useState('')
    const [country, setCountry] = useState('')
    const [hr, setHr] = useState('')
    const [rn_type, setRn_type] = useState('')
    const [cs, setCs] = useState('')
    const [pwr, setPwr] = useState('')
    const [date_made, setDate_made] = useState('')
    const [bt_type, setBt_type] = useState('')
    const [tso, setTso] = useState('')
    const [test_version, setTest_version] = useState('')
    const [mdl, setMdl] = useState('')
    const [state, setState] = useState('')
    const [str_type, setStr_type] = useState('')
    const [rn_pwr, setRn_pwr] = useState('')
    const [cs_admin, setCs_admin] = useState('')
    const [notes, setNOte] = useState('')

    

    const options = useMemo(() => countryList().getData(), [])

    const coutryChange = country => {
        setCountry(country)
    }

    const handleClick = (e) => {
        setSrv([...srv, srvD])
        setSrvD('')
    }
    const deletICon = (index) => {
        let clone = [...srv]
        clone.splice(index, 1)
        setSrv(clone)
    }

    const CreatePsForm = {
        name: name,
        in: In,
        bt_md: bt_md,
        srv: srv,
        status: status,
        contry: country,
        hr: hr,
        rn_type: rn_type,
        cs: cs,
        date_made: date_made,
        pwr: pwr,
        bt_type: bt_type,
        tso: tso,
        test_version: test_version,
        mdl: mdl,
        state: state,
        str_type: str_type,
        rn_pwr: rn_pwr,
        cs_admin: cs_admin,
        notes: notes
    }
    const navigate =useNavigate()

    const submit = (e) => {
        if( country === "") {
            toast.error('You must fill all the fields')
        }
        if(name.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(pwr.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(In.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(bt_type.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(bt_md.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(tso.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(bt_md.country === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(mdl.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(state.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(hr.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(rn_pwr.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(cs.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(cs_admin.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(srv.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        if(notes.length === 0){
            toast.error('You must fill all the fields');
            return 0
        }
        e.preventDefault();
        console.log(CreatePsForm)
        axiosApi('api/user/add/ps', CreatePsForm, localStorage.getItem("admin-token"))
            .then((res) => {
                if(res.data.status_code === 200) {
                    toast.success(res.data.description);
                    setTimeout(() => {
                        navigate('/PslistPagePage')
                    }, 3000);
                } else {
                    toast.error(res.data.description)
                }      
            })
    }
    return (
        <div className={CreatePscss.container}>
            <h1>Create Ps</h1>
            <form className={CreatePscss.main}>
                <div className={CreatePscss.mainA}>
                    <label className={CreatePscss.Item}>
                        name:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            name='name'
                            id='name'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Pwr:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setPwr(e.target.value)}
                            value={pwr}
                            name='pwr'
                            id='pwr'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        In:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setIn(e.target.value)}
                            value={In}
                            name='In'
                            id='In'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        BT Type:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setBt_type(e.target.value)}
                            value={bt_type}
                            name='btType'
                            id='btType'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        BT Md:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setBt_md(e.target.value)}
                            value={bt_md}
                            name='btMd'
                            id='btMd'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Tso:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setTso(e.target.value)}
                            value={tso}
                            name='tso'
                            id='tso'
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Country:
                        <Select 
                        options={options} 
                        value={country} 
                        onChange={coutryChange}
                        className={CreatePscss.ItemSC}
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Test Version:
                        <select
                            name="testVersion"
                            id="testVersion"
                            className={CreatePscss.ItemS}
                            onChange={(e) => setTest_version(e.target.value)}
                            value={test_version}
                        >
                            <option value="No Version">No Version </option>
                            <option value="1.2.3.4">1.2.3.4 </option>
                            <option value="4.3.2.1">4.3.2.1 </option>
                            <option value="6.5.4.3">6.5.4.3 </option>
                        </select>
                    </label>
                    <label className={CreatePscss.Item} >
                        Status:
                        <select
                            name="status"
                            id="status"
                            className={CreatePscss.ItemS}
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                        >
                            <option>Up </option>
                            <option>Down </option>
                            <option>Maintenance </option>
                            <option>Dvlp </option>
                        </select>
                    </label>
                    <label className={CreatePscss.Item}>
                        Mdl:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setMdl(e.target.value)}
                            value={mdl}
                            name='mdl'
                            id='mdl'
                            required
                        />
                    </label>
                </div>
                <div className={CreatePscss.mainB}>
                    <label className={CreatePscss.Item}>
                        State:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setState(e.target.value)}
                            value={state}
                            name='state'
                            id='state'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Hr:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setHr(e.target.value)}
                            value={hr}
                            name='hr'
                            id='hr'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Str Type:
                        <select
                            name="strType"
                            id="strType"
                            value={str_type}
                            className={CreatePscss.ItemS}
                            onChange={(e) => setStr_type(e.target.value)}
                        >
                            
                            <option>L</option>
                            <option>S</option>
                        </select>
                    </label>
                    <label className={CreatePscss.Item}>
                        Rn Type:
                        <select
                            name="rnType"
                            id="rnType"
                            className={CreatePscss.ItemS}
                            value={rn_type}
                            onChange={(e) => setRn_type(e.target.value)}
                        >
                            <option value='W'>W</option>
                            <option value='P'>P</option>
                            <option value='O'>O</option>
                        </select>
                    </label>
                    <label className={CreatePscss.Item}>
                        Rn Pwr:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setRn_pwr(e.target.value)}
                            value={rn_pwr}
                            name='rnPwr'
                            id='rnPwr'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Cs:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setCs(e.target.value)}
                            value={cs}
                            name='cs'
                            id='cs'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Cs admin:
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setCs_admin(e.target.value)}
                            value={cs_admin}
                            name='csAdmin'
                            id='csAdmin'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Date Made:
                        <input
                            type="date"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setDate_made(e.target.value)}
                            value={date_made}
                            name='dateMade'
                            id='dateMade'
                            required
                        />
                    </label>
                    <label className={CreatePscss.Item}>
                        Srv:
                        < AiFillPlusCircle
                            className={CreatePscss.AddIcon}
                            onClick={handleClick}
                        />
                        <input
                            type="text"
                            className={CreatePscss.ItemIp}
                            onChange={(e) => setSrvD(e.target.value)}
                            value={srvD}
                            name='srv'
                            id='srv'
                            required
                        />
                    </label>
                    <div className={CreatePscss.srvArea}>
                        {
                            srv.length !== 0
                                ? srv.map((item, index) => {
                                    return (
                                        <p
                                            key={index}
                                            className={CreatePscss.srvItem}>
                                            {item}
                                            <AiOutlineCloseCircle onClick={() => deletICon(index)} />
                                        </p>
                                    )
                                })
                                : null
                        }
                    </div>
                </div>
                <div className={CreatePscss.mainC}>
                    Notes:
                    <textarea className={CreatePscss.TextAreaIP}
                        onChange={(e) => setNOte(e.target.value)}
                        name="notes"
                        id="notes"
                        value={notes}
                        required
                    >
                    </textarea>
                    <input  type='submit' onClick={submit} className={CreatePscss.submitIn} />
                </div>
            </form>
        </div>
    )
}
