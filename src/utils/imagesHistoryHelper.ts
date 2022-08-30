const setNewHistory = (state) => {
    state.positionHistory += 1;
    if (state.positionHistory > 1)
        state.historyImage = state.historyImage.slice(0, state.positionHistory);
    state.historyImage.push(state.selectedImage.url);
    return state;
};

export default setNewHistory;
