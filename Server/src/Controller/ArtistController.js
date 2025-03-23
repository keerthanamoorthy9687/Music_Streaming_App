const Artist = require('../Models/ArtistsModels');


//  Create a new artist (Admin Only)
const createArtist = async (req, res) => {
    try {
        const { name, bio, imageUrl } = req.body;

        const newArtist = new Artist({ name, bio, imageUrl });
        await newArtist.save();

        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get all artists
const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get a single artist by ID
const getArtistById = async (req, res) => {
    try {
        const { artistId } = req.params;
        const artist = await Artist.findById(artistId);

        if (!artist) {
            return res.status(404).json({ message: "Artist not found" });
        }

        res.json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Update an artist (Admin Only)
const updateArtist = async (req, res) => {
    try {
        const { artistId } = req.params;
        
      console.log(artistId)
        const updatedArtist = await Artist.findByIdAndUpdate(
            artistId,req.body, { new: true }
        );

        if (!updatedArtist) {
            return res.status(404).json({ message: "Artist not found" });
        }

        res.json(updatedArtist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Delete an artist (Admin Only)
const deleteArtist = async (req, res) => {
    try {
        const { artistId } = req.params;

        const deletedArtist = await Artist.findByIdAndDelete(artistId);
        if (!deletedArtist) {
            return res.status(404).json({ message: "Artist not found" });
        }

        res.json({ message: "Artist deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports={createArtist,getAllArtists,getArtistById,updateArtist,deleteArtist}
