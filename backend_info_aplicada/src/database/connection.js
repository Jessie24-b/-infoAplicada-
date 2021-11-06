import sql from 'mssql'

const dbSettings = {
    user: 'userInfo',
    password: '1234',
    server: 'localhost',
    database: 'infoAplicada',
    options: {
        encryp: true,
        trustServerCertificate:true,
    },
};



export async function getconnection(){
   try {
    const pool = await sql.connect(dbSettings)
    return pool;
   } catch (error) {
       console.error(error);
   }
}

export {sql};