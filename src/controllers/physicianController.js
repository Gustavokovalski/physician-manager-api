const Physician = require("../models/Physician.js");
const Sequelize = require("sequelize");

module.exports = {
    async newPhysician(req, res){
        const { name, email, password } = req.body;
        if( !name || !email || !password){
            res
            .status(400)
            .json({
                msg: "Dados obrigatórios não foram preenchidos."
            });
        }
    
        const isPhysicianNew = await Physician.findOne({
            where: {email},
        });
    
        if(isPhysicianNew)
        res.status(403).json({msg: "Médico já cadastrado"});
        else {
            const physician = await Physician.create({
                name,
                email,
                password,
            }).catch((error) => {
                res.status(500).json({ msg: "Não foi possível inserir os dados"});
            });
            if(patient)
            res.status(201).json({ msg: "Novo médico adicionado"});
            else
            res.status(404)
            .json({msg: "Não foi possível cadastrar novo médico"});
        }
    },
    async listAllPhysicians(req, res) {
        const physicians = await Physician.findAll({
            order: [["name", "ASC"]],            
        }).catch((error) => {
            res.status(500).json({ msg: "Falha na conexão."});
        });
        if (physicians) res.status(200).json({ physicians});
        else
        res.status(404).json(
            { msg: "Não foi possível encontrar médicos"});
    }, 
    async updatePhysician(req, res) { 
        const physicianId = req.body.id;
        const physician = req.body;
        if(!physicianId) req.status(400).json({ msg: "Id do médico vazio!"});
        else {
            const physicianExists= await Physician.findByPk(physicianId);
            if(!physicianExists)
            req.status(404).json({ msg: "Médico não encontrado!"}); 
            else{
                if(physician.name || physician.email){
                    await Physician.update(physician, {
                        where: {id: physicianId},
                    });
                    return res
                    .status(200)
                    .json({msg:"Médico atualizado"});
                }else
                return res
                .status(400)
                .json({ msg: "Campos obrigatorios não preenchidos"});
            }
        }
    },
    async deletePhysician(req, res){
        const physicianId = req.params.id;
        const deletedPhysician = await Physician.destroy({
            where: { id:physicianId},                
        }).catch(async (error)=> {
            const physicianHasRef = await Physician.findOne({
                where: { physicianId },                    
            }).catch((error)=>{
                res.status(500).json({msg:"Falha na conexão"});
            });
            if(physicianHasRef)
            return res
            .status(403)
            .json({ msg: "Médico possui atendimentos"});
        });
        if (deletedPhysician == 0){
        res.status(404).json({msg:"Médico não encontrado"});
        }
        else{
        res.status(200).json({msg:"Médico deletado"});
        }
    },
};