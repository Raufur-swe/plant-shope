const TryCatch = (handler) => {

    return async (req, res, next) => {

        try {

            handler(req, res, next)
            
        } catch (error) {

            console.error("\n=====Error=====\n");
            console.error(error)
            console.error(error.stack)
            console.error("\n=====Error=====\n")

            return res.status(500).json({
                message: error.message
            })
        }
    }
}

export default TryCatch