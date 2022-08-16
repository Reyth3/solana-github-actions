import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { O } from "../target/types/o";

describe("o", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.O as Program<O>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature hehe", tx);
  });
});
