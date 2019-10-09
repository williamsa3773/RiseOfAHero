class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  has_many :heros

  def gen_hero
    Hero.create!(
      name: "noob",
      level: 1,
      exp: 0,
      str: 1,
      dex: 1,
      kno: 1,
      cha: 1,
      vit: 1,
      def: 1,
      user: self,
      skill_point: 5,
    )
  end
end
