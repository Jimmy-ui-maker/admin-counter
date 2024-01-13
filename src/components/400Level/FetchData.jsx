'use server'

import { LevelFour } from "@/models/Tables"

export const getManyFour = async() => {
    try {
        const fourStudents = await LevelFour.find({})
        return fourStudents
    } catch (error) {
        throw new Error ("Failed To Fetch Many 400L Users " + error)
    }
}


export const getSingleFour = async (id) => {
    try {
        const fourStudent = await LevelFour.findById(id)
        return fourStudent
    } catch (error) {
        throw new Error ("Failed To Fetch Single 400L Users " + error)
    }
}