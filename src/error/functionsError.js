export default function functionsError(error) {
    if(error.code === 'ENOENT') {
        throw new Error("Arquivo não encontrado!")
    }else{
        return 'Outro erro';
    }
}

