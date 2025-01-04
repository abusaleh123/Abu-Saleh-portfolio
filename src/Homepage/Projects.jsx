import bg from '../../src/assets/6325.jpg'; // Make sure this path is correct

const Projects = () => {
  return (
    <div
    
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      
      }}
    >
    <div className='w-10/12 mx-auto text-center'>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-7xl">Projects</h1>
      </div>
      </div>
    </div>
  );
};

export default Projects;
