export const login=(req,res)=>{
    const {role}=req.body;

    if(!role){
        return res.status(400).json({
            message:"Role is required"
        });
    }
     res.json({
    success: true,
    role: role,
    message: "Login successful"
  });
};
