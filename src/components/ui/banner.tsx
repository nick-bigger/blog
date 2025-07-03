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
      <pre className="text-sm leading-none">
        {conifer} {crown}
      </pre>
    </>
  );
};
