const sequelize = require('sequelize');
const {db} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index');

const {
    seedRestaurant,
    seedMenu,
    seedItem,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        //menu.name==null
        //all the inputs are correct

        // const testResturant = await Restaurant.create({
        //     name: 'McDonalds',
        //     location: 'London',
        //     cuisine: 'American'
        // })

        // expect(testResturant.name).toEqual('McDonalds')

        const seedTestResturant = await Restaurant.create(seedRestaurant[0])
        expect(seedTestResturant.name).toEqual(seedRestaurant[0].name)
        

    });

    test('can create a Menu', async () => {
        // done

        const seedTestMenu = await Menu.create(seedMenu[0])
        expect(seedTestMenu.title).toEqual(seedMenu[0].title)
        
    });

    test('can find Restaurants', async () => {
        // done

        const seedTestFindResturant = await Restaurant.findAll() //this fetches array of objects
        expect(seedTestFindResturant.length).toEqual(1)
        expect(seedTestFindResturant[0].name).toEqual(seedRestaurant[0].name)

    });

    test('can find Menus', async () => {
        // done
        const seedTestFindMenu = await Menu.findAll()
        expect(seedTestFindMenu[0].title).toEqual(seedMenu[0].title)

        
    });

    test('can delete Restaurants', async () => {
        // done
        const seedTestFindResturantToDelete = await Restaurant.findAll()
        const deletedResturant = await seedTestFindResturantToDelete[0].destroy()
        expect(deletedResturant.name).toEqual(seedTestFindResturantToDelete[0].name)

    });

    test('Resturant can have Many Menus', async () => {

        await db.sync({force:true})

        let newRestaurant = await Restaurant.create({
            name: 'Wagamamas',
            location: 'Birmingham',
            cuisine: 'Japanese'
        })
    
        let newMenu = await Menu.create({
            title: 'Gyoza'
        })

        let oldMenu = await Menu.create({
            title: 'Noodles'
        })
    
        await newRestaurant.addMenu(newMenu)
        await newRestaurant.addMenu(oldMenu)

        const menus = await newRestaurant.getMenus()

        // expect(menus[0] instanceof Menu).toBeTruthy
        expect(menus[0] instanceof Menu).toBe(true)
        // expect(menus[0].title).toEqual(newMenu.title)
        // expect(menus.length).toBe(2)

    })

    test('Menu can have many items, items can have many menus', async () => {

        //make a menu
        //make an item
        //add item menu
        //check if the item is attached to menu

        await db.sync({force:true})

        let breakfast = await Menu.create(seedMenu[0])
        let lunch = await Menu.create(seedMenu[1])

        console.log(breakfast)

        // let hamburger = await Item.create(seedItem[2])
        // let masala = await Item.create(seedItem[0])
        let hamburger = await Item.create(seedItem[2])
        let masala = await Item.create(seedItem[0])


        await breakfast.addItem(masala)
        await lunch.addItem(hamburger)

        const items = await breakfast.getItems()
                
        // const menus = 

        expect(items[0] instanceof Item).toBe(true)
        // expect(items[0].name).toBe(seedItem[0].name)

    })


})