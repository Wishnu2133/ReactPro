
function Navbar (){
    const mystyle = {
        fontFamily : 'cursive',
        color : 'blue',
        }
    return (
    <>
    <nav>
      <div className="contain w-lg py-0 px-2">
        <ul className='flex flex-wrap justify-start space-x-3 py-1 text-xl' >
          <div className='font-extrabold'>T/N E X T</div>
          <li style={mystyle}><a href='/'>Home</a></li>
          <li style={mystyle}><a href='/about'>about</a></li>
        </ul>
      </div>
    </nav>
    </>
    )
}

export default Navbar ;
