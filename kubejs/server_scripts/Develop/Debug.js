ItemEvents.rightClicked((e) => {
  const {
    item: { id },
    player,
    player: { mainHandItem },
    server,
  } = e

  if (!mainHandItem.empty) {
    if (mainHandItem.id === id && player.shiftKeyDown) {
      player.runCommandSilent("kubejs hand")
    }

    if (mainHandItem === "minecraft:diamond") {
      server.runCommand("reload")
    }
  }
})
