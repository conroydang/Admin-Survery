const port = 3000;
export const ConfigurationUrl = {
  host:`localhost${port}`,
  list:{
    auth:{
      login:"/api/auth/login",
      signup:"/api/auth/register"
    },
    data:"/api/data",
    calculate:"/api/caculate",
    questions:"/api/questions"
  }
}
