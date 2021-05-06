export const state = () => ({
Paciente:null,
})


export const mutations = {
    updatePaciente(state,updateData){
        state.Paciente = updateData
    }
}