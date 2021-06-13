const Patient = require("../models/Patient.js");
const Sequelize = require("sequelize");
const Physician = require("../models/Physician.js");

module.exports = {
    async newPatient(req, res){
        const { name, email, password } = req.body;
        if( !name || !email || !password){
            res
            .status(400)
            .json({
                msg: "Dados obrigatórios não foram preenchidos."
            });
        }

        const isPatientNew = await Patient.findOne({
            where: {email},
        });

        if(isPatientNew)
        res.status(403).json({msg: "Paciente já cadastrado"});
        else {
            const patient = await Patient.create({
                name,
                email,
                password,
            }).catch((error) => {
                res.status(500).json({ msg: "Não foi possível inserir os dados"});
            });
            if(patient)
            res.status(201).json({ msg: "Novo paciente adicionado"});
            else
            res.status(404)
            .json({msg: "Não foi possível cadastrar novo paciente"});
        }
    },  
    async searchPatientByName(req, res){
        const name = res.body.name;
        if(!name)
        res.status(400).json({
            msg: "Parâmetro nome está vazio",
        });
        const Op = Sequelize.Op;
        const patient = await Patient.findAll({
            where: { name: { [Op.like]: "%" + name + "%"}},
        });
        console.log(patient);
        if(patient){
            if (patient == "")
            res.status(404).json({msg: "Paciente não encontrado"});
            else res.status(200).json({patient});
        }else
        res.status(400).json({
            msg: "Paciente não encontrado.",
        });
    },
    async searchPatientByPhysicianId(req, res){
        const physicianId = req.params.id;
		if (!physicianId)
			res.status(400).json({
				msg: "Parâmetro Id do médico está vazio.",
			});
        const Op = Sequelize.Op;

        const physician = await Physician.findByPk({
			where: { physicianId },
		}).catch((error) => res.status(500).json({ msg: "Falha na conexão." }))

        if(physician == "")
            return res.status(404).json({msg: "Médico não encontrado"});

        const patient = await Patient.findAll({
			where: { sellerId },
		}).catch((error) => res.status(500).json({ msg: "Falha na conexão." }))
        console.log(patient);
        if(patient){
            if (patient == "")
            res.status(404).json({msg: "Paciente não encontrado"});
            else res.status(200).json({patient});
        }else
        res.status(400).json({
            msg: "Paciente não encontrado.",
        });
    },
    async updatePatient(req, res) { 
        const patientId = req.body.id;
        const patient = req.body;
        if(!patientId) req.status(400).json({ msg: "Id do paciente vazio!"});
        else {
            const patientExists = await Patient.findByPk(patientId);
            if(!patientExists)
            req.status(404).json({ msg: "Paciente não encontrado!"}); 
            else{
                if(patient.name || patient.email){
                    await Patient.update(patient, {
                        where: {id: patientId},
                    });
                    return res
                    .status(200)
                    .json({msg:"Paciente atualizado!"});
                }else
                return res
                .status(400)
                .json({ msg: "Campos obrigatorios não preenchidos"});
            }
        }
    },
};