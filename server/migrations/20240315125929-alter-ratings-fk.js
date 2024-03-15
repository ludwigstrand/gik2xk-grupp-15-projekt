'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Command to drop the foreign key
    await queryInterface.sequelize.query(`ALTER TABLE ratings DROP FOREIGN KEY ratings_ibfk_1;`);

    // Command to add the foreign key with ON DELETE CASCADE
    await queryInterface.sequelize.query(`
      ALTER TABLE ratings ADD CONSTRAINT ratings_ibfk_1 
      FOREIGN KEY (product_id) 
      REFERENCES products(id) 
      ON DELETE CASCADE;
    `);
  },

  async down (queryInterface, Sequelize) {
    // Revert commands
    await queryInterface.sequelize.query(`ALTER TABLE ratings DROP FOREIGN KEY ratings_ibfk_1;`);
    await queryInterface.sequelize.query(`
      ALTER TABLE ratings ADD CONSTRAINT ratings_ibfk_1 
      FOREIGN KEY (product_id) 
      REFERENCES products(id);
    `);
    // Note: The revert command here assumes the original state did not have ON DELETE CASCADE. Adjust as necessary.
  }
};
