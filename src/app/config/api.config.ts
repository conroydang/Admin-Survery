const port = 3000;
export const ConfigurationUrl = {
  host:`http://localhost:${port}`,
  list:{
    auth:{
      login:"/auth/login",
      signup:"/auth/register"
    },
    data:"/api/sample",
    calculate:"/api/caculate",
    questions:"/api/questions",
    user:"/api/users",
    answers:"/api/answers"
  }
}
