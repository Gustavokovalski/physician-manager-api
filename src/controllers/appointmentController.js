const Appointment = require("../models/Appointment.js");
const Sequelize = require("sequelize");
const Patient = require("../models/Patient.js");

module.exports = {
    async newAppointment(req, res){
        const { physicianId, patientId, appointmentDate, description } = req.body;
        if( !physicianId || !patientId || !appointmentDate){
            res
            .status(400)
            .json({
                msg: "Dados obrigatórios não foram preenchidos."
            });
        }

        const isAppointmentNew = await Appointment.findOne({
            where: {description},
        });

        if(isAppointmentNew)
        res.status(403).json({msg: "Consulta já cadastrada"});
        else {
            const appointment = await Appointment.create({
                physicianId,
                patientId,
                appointmentDate,
                description,
            }).catch((error) => {
                res.status(500).json({ msg: "Não foi possível inserir os dados"});
            });
            if(appointment)
            res.status(201).json({ msg: "Nova consulta adicionado"});
            else
            res.status(404)
            .json({msg: "Não foi possível cadastrar nova consulta"});
        }
    },
    async searchAppointmentByPatientId(req, res){
        const patientId = req.params.patientId;
        if(!patientId)
        res.status(400).json({
            msg:"Campo Id do paciente vazio",
        });

        const patient = await Patient.findByPk({
			where: { patientId },
		}).catch((error) => res.status(500).json({ msg: "Falha na conexão." }))

        if(patient == "")
            return res.status(404).json({msg: "Paciente não encontrado"});

        const aps = await Appointment.findAll({
            where: { patientId },
        }).catch((error) => res.status(500).json({msg: "Falha na conexão"}));
        if(aps){
            if(aps= "")
            res.status(404).json({msg:"Não há consultas para esse paciente"});
            else res.status(200).json({aps});
        } else res.status(404).json({msg:"Não foi possível encontrar consultas"});
    },
    async searchAppointmentByPhysicianId(req, res){
        const physicianId = req.params.physicianId;
        if(!physicianId)
        res.status(400).json({
            msg:"Campo Médico vazio",
        });

        const physician = await Physician.findByPk({
			where: { physicianId },
		}).catch((error) => res.status(500).json({ msg: "Falha na conexão." }))

        if(physician == "")
            return res.status(404).json({msg: "Médico não encontrado"});
            
        const aps = await Appointment.findAll({
            where: { physicianId},
        }).catch((error) => res.status(500).json({msg: "Falha na conexão"}));
        if(aps){
            if(aps= "")
            res.status(404).json({msg:"Não há consultas para esse médico"});
            else res.status(200).json({aps});
        } else res.status(404).json({msg:"Não foi possível encontrar consultas"});
    },  
    async deleteAppointment(req, res){
        const appointmentId = req.params.id;
        const deletedAppointment = await Appointment.destroy({
            where: { id:appointment},                
        }).catch(async (error)=> {
            const appointmentHasRef = await Appointment.findOne({
                where: { appointmentId },                    
            }).catch((error)=>{
                res.status(500).json({msg:"Falha na conexão"});
            });
            if(appointmentHasRef)
            return res
            .status(403)
            .json({ msg: "Consulta possui médicos"});
        });
        if (deletedAppointment == 0){
        res.status(404).json({msg:"Consulta não encontrada"});
        }
        else{
        res.status(200).json({msg:"Consulta deletada"});
        }
    },
};