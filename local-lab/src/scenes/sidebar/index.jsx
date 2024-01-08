
import BiotechIcon from '@mui/icons-material/Biotech';


function sidebar() {
    return (
        <body class="flex p-2">
        <div class="bg-gray-200 m-4 p-2 rounded-lg  " >
{/* Heading */}
<div> 
    <BiotechIcon sx={{color:'gray-500'}}/>
    <h0 class='p-2'> Local Lab </h0>
</div>

            <div>
                
                <h1> Heading One </h1>
                <h2> Heading 2 </h2>
                <h3> Heading 3 </h3>
                <p>hello this is some sample text </p>
            </div>
        </div>
        </body>
    );
}

export default sidebar; 