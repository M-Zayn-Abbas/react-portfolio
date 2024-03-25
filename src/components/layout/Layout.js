import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.js';
import './index.scss';
import Project from '../Projects/project.js';

const Layout = ()=> {
    return (
    <div className='App'>
    <Sidebar/>
    <div className='page'>
    <span className='tags top-tags'>
        <span className='top-tag-html'>&lt;html&gt;</span>
    <br/>
        &lt;body&gt;</span>

        <Outlet/>

       {/* <span className='tags bottom-tags'>
            &lt;/body&gt;
            <br/>
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
    </span>*/}
    </div>
    </div>
    )
}

export default Layout;