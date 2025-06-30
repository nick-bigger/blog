const conifer = `
                _       
  _  _  ._  o _|_ _  ._ 
 (_ (_) | | |  | (/_ |  
`;
const crown = `
                          
         _ ._ _       ._  
        (_ | (_) \\/\\/ | | 
                          
`;

export const Banner = () => {
  return (
    <>
      <pre className="text-xl leading-none">{conifer}</pre>
      <pre className="text-xl leading-none">{crown}</pre>
    </>
  );
};
