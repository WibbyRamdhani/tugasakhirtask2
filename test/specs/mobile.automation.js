describe('Open Application',() => {
    it('should open apps', async() => {
        await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/header_welcome"]').click();
    })
})
describe('Submit User Form Data',() => {
    it('input field name: Wiby', async() => {
        await $('//*[@text="Name"]').setValue("Wiby");
    })
    it('input field weight: 80', async() => {
        await $('//*[@text="Weight"]').setValue(80);
    })
    it('input field height: 170', async() => {
        await $('//*[@text="Height"]').setValue(170);
    })
    it('click choose field gender: Male', async() => {
        await $('//*[@text="Male"]').click();
    })
    it('click button NEXT', async() => {
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]').click();
    })
})
describe('Submit User Form Data Page 2',() => {
    it('click choose field aktivitas sehari-hari', async() => {
        await $('//*[@text="Sekolah, Kuliah, Kerja Kantor, dsj."]').click();
    })
    it('click button SELESAI', async() => {
        await $('//*[@text="SELESAI"]').click();
    })
    it('validate home screen diet meal app', async() => {
        await expect($('//*[@text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
    })
})
