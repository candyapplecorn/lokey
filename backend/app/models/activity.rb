class Activity < ApplicationRecord
  validates :name, presence: true

  has_many :interestings,
  primary_key: :id,
  foreign_key: :activity_id,
  class_name: :Interest

  has_many :events

  has_many :interested_persons,
  through: :interestings,
  source: :user
end
