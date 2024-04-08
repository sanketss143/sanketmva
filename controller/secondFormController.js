import SecondForm from "../models/secondFormModel.js";


export const createSecondForm = async (req, res) => {
  try {
    const secondFormEntry = new SecondForm(req.body);
    if (!secondFormEntry) {
      return res.status(404).json({ msg: "Second form data not found" });
    }
    await secondFormEntry.save();
    res.status(200).json({ msg: "Data added successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const getAllSecondForm = async (req, res) => {
  try {
    const secondFormEntries = await SecondForm.find();
    if (!secondFormEntries) {
      return res.status(404).json({ msg: "No second form data found" });
    }
    res.status(200).json(secondFormEntries);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const getOneSecondForm = async (req, res) => {
  try {
    const id = req.params.id;
    const secondFormEntry = await SecondForm.findById(id);
    if (!secondFormEntry) {
      return res.status(404).json({ msg: "Second form entry not found" });
    }
    res.status(200).json(secondFormEntry);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const updateSecondForm = async (req, res) => {
  try {
    const id = req.params.id;
    const secondFormEntry = await SecondForm.findById(id);
    if (!secondFormEntry) {
      return res.status(404).json({ msg: "Second form entry not found" });
    }
    const updatedData = await SecondForm.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "Data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const deleteSecondForm = async (req, res) => {
  try {
    const id = req.params.id;
    const secondFormEntry = await SecondForm.findById(id);
    if (!secondFormEntry) {
      return res.status(404).json({ msg: "Second form entry not found" });
    }
    await SecondForm.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const viewSecondForm = async (req, res) => {
  try {
    const id = req.params.id;
    const secondFormEntry = await SecondForm.findById(id);
    if (!secondFormEntry) {
      return res.status(404).json({ msg: "Second form entry not found" });
    }
    res.status(200).json(secondFormEntry);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};