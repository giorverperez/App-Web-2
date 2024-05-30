
import server from 'express';
import {Paciente, Plato, Registro, auditoria} from './routes';
const app = server()
app.use(server.json())
// Aquí puedes configurar tus rutas
app.use('/pacientes', Paciente);
app.use('/platos', Plato);
app.use('/registros', Registro);
app.use('/auditoria', auditoria);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

