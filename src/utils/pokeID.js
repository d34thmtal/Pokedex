function pokeID (standardID) {
    standardID= standardID.toString().padStart(3, "0")
    return standardID;
}

export default pokeID