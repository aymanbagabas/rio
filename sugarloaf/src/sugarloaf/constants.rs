use crate::Sugar;
// use std::mem::MaybeUninit;

pub const SUGAR_BLOCK_MAX_CONTENT_SIZE: usize = 500;

#[inline]
pub fn create_sugar_block() -> [Sugar; SUGAR_BLOCK_MAX_CONTENT_SIZE] {
    // let inner = {
    //     // Create an array of uninitialized values.
    //     let mut array: [MaybeUninit<Sugar>; LINE_MAX_CHARACTERS] =
    //         unsafe { MaybeUninit::uninit().assume_init() };

    //     for element in array.iter_mut() {
    //         *element = MaybeUninit::new(Sugar::default());
    //     }

    //     unsafe { std::mem::transmute::<_, [Sugar; LINE_MAX_CHARACTERS]>(array) }
    // };

    // inner

    // Lame solution! will come with something better later, just trying to avoid UB usage
    // like the code above.
    //
    // Also wanted to avoid vec/box creation for something simply that's many times
    // Note: This solution doesn't affect the binary size.
    [
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
        Sugar::default(),
    ]
}
